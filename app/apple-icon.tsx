import { ImageResponse } from "next/og"

// Image metadata
export const size = {
  width: 180,
  height: 180,
}
export const contentType = "image/png"

// Image generation
export default function Icon() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        background: "#2C8039",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "22%",
        color: "white",
        fontSize: 120,
        fontWeight: "bold",
        fontFamily: "Helvetica",
      }}>
      V
    </div>,
    // ImageResponse options
    {
      ...size,
    },
  )
}

