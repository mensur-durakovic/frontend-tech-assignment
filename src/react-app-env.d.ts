// eslint-disable-next-line spaced-comment
/// <reference types="react-scripts" />

interface TimelineItemImage {
  title: string
  image: string
  altText: string
  position: string
}
interface TimelineItemModel {
  description: string
  startMargin?: number
  endMargin?: number
  startLineStyle?: string
  endLineStyle?: string
  images: TimelineItemImage[]
}
