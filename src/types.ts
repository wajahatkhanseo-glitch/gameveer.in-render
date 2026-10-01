
export type NavTab =
  | 'home'
  | 'register'
  | 'login'
  | 'download'
  | 'responsible-gaming'
  | 'about-us'
  | 'contact-us'
  | 'terms-and-conditions'
  | 'privacy-policy'
  | '404';

export interface WingoRound {
  period: string;
  number: number;
  color: 'green' | 'red' | 'violet' | 'green-violet' | 'red-violet';
  bigSmall: 'Big' | 'Small';
}
