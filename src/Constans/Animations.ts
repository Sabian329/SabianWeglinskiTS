export const PhoneVariants = {
  hidden: {
    y: 400,
    opacity: 0,
    zIndex: 10,
  },
  visible: {
    y: 90,
    opacity: 1,
    zIndex: 10,
    transition: {
      duration: 1,
    },
  },
};
export const TextVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
export const LogoVariants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};
export const MailVariants = {
  start: {
    backgroundColor: "	hsl(110, 22%, 54%)",
  },
  stop: {
    backgroundColor: "	hsl(0, 0%, 78%)",
    transition: {
      duration: 1,
    },
  },
};
