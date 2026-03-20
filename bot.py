import asyncio
import logging
import os
from telegram import Update
from telegram.constants import ChatAction
from telegram.ext import (
    ApplicationBuilder,
    ContextTypes,
    MessageHandler,
    filters,
)

# === CONFIG ===
TOKEN = "8769097592:AAFjEE1jWUcxhoKyYo-5WIOATW9pmm6dPsc"
TARGET_CHAT_ID = "-4617584284"

# === LOGGING ===
logging.basicConfig(
    format="%(asctime)s | %(levelname)s | %(name)s | %(message)s",
    level=logging.INFO,
)
logger = logging.getLogger(__name__)


def format_user(update: Update) -> str:
    user = update.effective_user
    if not user:
        return "unknown user"

    if user.username:
        return f"@{user.username}"

    full_name = " ".join(
        part for part in [user.first_name, user.last_name] if part
    ).strip()

    if full_name:
        return full_name

    return f"user_id={user.id}"


def format_chat(update: Update) -> str:
    chat = update.effective_chat
    if not chat:
        return "unknown chat"

    title = getattr(chat, "title", None)
    if title:
        return f"{title} ({chat.type})"

    full_name = " ".join(
        part for part in [getattr(chat, "first_name", None), getattr(chat, "last_name", None)] if part
    ).strip()

    if full_name:
        return f"{full_name} ({chat.type})"

    username = getattr(chat, "username", None)
    if username:
        return f"@{username} ({chat.type})"

    return f"chat_id={chat.id} ({chat.type})"


async def handle(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    try:
        if not update or not update.effective_message:
            logger.warning("Skipped update without message: %s", update)
            return

        message = update.effective_message
        text = message.text or message.caption or ""

        if not text.strip():
            logger.info("Skipped non-text message from %s", format_user(update))
            return

        sender = format_user(update)
        source_chat = format_chat(update)

        outgoing_text = (
            "Новое сообщение\n"
            f"От: {sender}\n"
            f"Источник: {source_chat}\n"
            f"User ID: {update.effective_user.id if update.effective_user else 'unknown'}\n"
            f"Chat ID: {update.effective_chat.id if update.effective_chat else 'unknown'}\n\n"
            f"{text}"
        )

        await context.bot.send_chat_action(
            chat_id=TARGET_CHAT_ID,
            action=ChatAction.TYPING,
        )

        await context.bot.send_message(
            chat_id=TARGET_CHAT_ID,
            text=outgoing_text,
        )

        logger.info("Forwarded message from %s", sender)

    except Exception:
        logger.exception("Error while handling update")


async def error_handler(update: object, context: ContextTypes.DEFAULT_TYPE) -> None:
    logger.exception("Unhandled exception while processing update", exc_info=context.error)

    # Опционально: уведомлять админский чат о падениях
    try:
        await context.bot.send_message(
            chat_id=TARGET_CHAT_ID,
            text=f"⚠️ Ошибка в боте: {type(context.error).__name__}: {context.error}",
        )
    except Exception:
        logger.exception("Failed to send error notification")


def validate_config() -> None:
    if not TOKEN or TOKEN == "BOT_TOKEN":
        raise RuntimeError("BOT_TOKEN is not set")

    if not TARGET_CHAT_ID or TARGET_CHAT_ID == "YOUR_CHAT_ID":
        raise RuntimeError("TARGET_CHAT_ID is not set")

    try:
        int(TARGET_CHAT_ID)
    except ValueError as e:
        raise RuntimeError("TARGET_CHAT_ID must be an integer-like string") from e


async def post_init(app) -> None:
    logger.info("Bot started successfully")


def main() -> None:
    validate_config()

    app = (
        ApplicationBuilder()
        .token(TOKEN)
        .post_init(post_init)
        .build()
    )

    app.add_handler(MessageHandler(filters.TEXT | filters.CaptionRegex(r".+"), handle))
    app.add_error_handler(error_handler)

    logger.info("Starting polling...")
    app.run_polling(
        allowed_updates=Update.ALL_TYPES,
        drop_pending_updates=True,
    )


if __name__ == "__main__":
    try:
        main()
    except (KeyboardInterrupt, SystemExit):
        logger.info("Bot stopped")
    except Exception:
        logger.exception("Fatal startup error")
        raise
