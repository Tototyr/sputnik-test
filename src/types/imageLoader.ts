export interface ImageLoader {
  loading: boolean;
  error: boolean;
  handleLoad: () => void;
  handleError: () => void;
}
