import styled from 'styled-components'
import { Button, Typography } from 'antd'
const { Title } = Typography

export const Box = styled.div<{
  padding?: string
  margin?: string
  bgColor?: string
  cursor?: string
}>`
  margin: ${({ margin }) => (margin ?? '0')};
  padding: ${({ padding }) => (padding ?? '0')};
  background-color: ${({ bgColor }) => (bgColor ?? 'transparent')};
  cursor: ${({ cursor }) => (cursor ?? 'default')};
`

export const FlexBox = styled(Box)<{
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
  align?: 'flex-start' | 'flex-end' | 'center'
  gap?: number
}>`
  display: flex;
  justify-content: ${({ justify }) => (justify ?? 'flex-start')};
  align-items: ${({ align }) => (align ?? 'flex-start')};
  gap: ${({ gap }) => (gap ? `${gap}px` : '0')};
`

export const Container = styled(Box)`
  width: 100%;
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
`

export const HeadingText = styled(Title)<{
  color?: string
}>`
  margin: 0;
  padding: 0;
  color: ${({ color }) => (color ?? 'black')};
`

export const Word = styled.span<{
  color?: string
  size?: number
  strong?: boolean
}>`
  margin: 0;
  padding: 0;
  color: ${({ color }) => (color ?? 'black')};
  font-size: ${({ size }) => (size ? `${size}px` : '16px')};
  font-weight: ${({ strong }) => (strong ? '700' : '400')};
`
export const Text = styled.p<{
  color?: string
  size?: number
  strong?: boolean
  align?: 'center' | 'left' | 'right'
}>`
  margin: 0;
  padding: 0;
  color: ${({ color }) => (color ?? 'black')};
  font-size: ${({ size }) => (size ? `${size}px` : '16px')};
  font-weight: ${({ strong }) => (strong ? '700' : '400')};
  text-align: ${({ align }) => (align ?? 'left')};
`
