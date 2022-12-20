import Image from "next/image";
import { useUrls } from "@hooks/useUrls";
import type { ImgProps } from "./Img.types";

export function Img(props: ImgProps) {
  const {
    image: { name, width, height },
    alt,
  } = props;
  const { getFileUrl, getThumbnailUrl } = useUrls();

  return (
    <div className="relative select-none">
      <Image
        placeholder="blur"
        blurDataURL={getThumbnailUrl(name)}
        loading="eager"
        width={width}
        height={height}
        layout="responsive"
        objectFit="cover"
        src={getFileUrl(name)}
        alt={alt}
      />
    </div>
  );
}
