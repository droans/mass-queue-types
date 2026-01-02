export interface AudioFormat {
  content_type: string;
  codec_type: string;
  sample_rate: number;
  bit_depth: number;
  channels: number;
  output_format_str: string;
  bit_rate: number;
}