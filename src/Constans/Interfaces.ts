export interface IProjectProps {
  name: string;
  logo: string;
  short: string;
  mainImage: string;
  overwiew: string;
  overwiewTwo: string;
  photoTwo: string;
  apiLogo: string;
  link: string;
  codeLink: string;
  apiLink: string;
}

export interface IModalProps {
  onClose: () => void;
  isOpen: boolean;
  name: string;
  logo: string;
  description: string;
}

export interface ITechnologiesProps {
  name: string;
  logo: string;
  description: string;
}
export interface IProjectSection {
  overwiewTwo: string;
  link: string;
  codeLink: string;
  apiLogo: string;
  apiLink: string;
  name: string;
}
