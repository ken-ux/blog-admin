export interface LoginFormProps {
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface PostProps {
  title: string;
  text: string;
  timestamp: string;
  id: string | undefined;
  _id?: string;
  published: boolean;
}
