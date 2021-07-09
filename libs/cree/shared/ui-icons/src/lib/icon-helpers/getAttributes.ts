import { Attrs } from './icons.model';

const defaultAttributes = {
  focusable: 'false',
  preserveAspectRatio: 'xMidYMid meet',
};

export function getAttributes({
  width = 0,
  height = 0,
  viewBox = `0 0 ${width} ${height}`,
  ...attributes
}: Attrs): Attrs {
  const iconAttributes = {
    ...defaultAttributes,
    ...attributes,
    width,
    height,
    viewBox,
  };

  if (iconAttributes['aria-label'] || iconAttributes['aria-labelledby'] || iconAttributes.title) {
    iconAttributes.role = 'img';
  } else {
    iconAttributes['aria-hidden'] = true;
  }

  return iconAttributes;
}
