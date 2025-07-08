export interface ImageLoaderState {
  loading: boolean;
  error: boolean;
  handleLoad: () => void;
  handleError: () => void;
}
