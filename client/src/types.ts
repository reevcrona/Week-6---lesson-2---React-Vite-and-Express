export interface Color {
  name: string;
  hex: string;
  rgb: string;
  hsl: string;
  cmyk: string;
  textColor: string;
  colorGroup: string;
}
export interface ApiResponse<T> {
  status: string;
  data: T;
}
