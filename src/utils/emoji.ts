const bookEmojis = ["📕", "📗", "📘", "📙", "📖"];

export const getBookEmoji = () => {
  return bookEmojis[Math.floor(Math.random() * bookEmojis.length)];
};

export const getBookEmojiFromString = (str: String) => {
  return bookEmojis[str.length % bookEmojis.length];
};
