import { Image as ChakraImage, ImageProps } from "@chakra-ui/react";
import React, { FC, Fragment, useState } from "react";

export const Image: FC<ImageProps> = (props) => {
	const [error, setError] = useState<boolean>(false);
	const [loaded, setLoaded] = useState<boolean>(false);

	return (
		<ChakraImage
			fallback={<Fragment />}
			ignoreFallback={error || loaded}
			onError={() => setError(true)}
			onLoad={() => setLoaded(true)}
			{...props}
		/>
	);
};
