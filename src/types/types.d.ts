export type Navitem = {
  scrollable?: boolean,
  title: string,
  type: string,
  path: string,
  icon?: string,
  items?: Navsubitem[]
};
export type Navsubitem = {
  title: string,
  path: string,
  type: string,
};
export interface Feature {
  name: string;
  description: string;
  icon: string;
  link?: string;
}
export type Testimonial = {
  name: string;
  title?: string;
  company?: string;
  description: string;
  avatar?: string;
};