export interface encodeImagesWSServiceSchema {
  type: "mass_queue/encode_images";
  entity_id: string;
  images: string[];
}

export interface imageData {
  provider: string;
  path: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [str: string]: any;
}

export interface encodedImageData extends imageData {
  encoded: string;
}

export type encodeImagesWSServiceResponse = encodedImageData[];
