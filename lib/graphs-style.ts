import styled from 'styled-components/macro'
import { StyleProps, BarsProps, ColorsPorps, ColorsSizePorps } from './types'

export const Container = styled.div<StyleProps>`
  border: 2px solid ${(props) => props.colors?.border};
  border-radius: 10px;
  display: grid;
  font-family: 'Poppins', sans-serif;
  grid-template-rows: 40px 1fr 24px;
  grid-template-areas: "title title" "yaxis shape" "yaxis xaxis";
  grid-template-columns: 53px 1fr;
  height: ${(props) => props.size.height + 'px'};
  padding: 24px;
  width: ${(props) => props.size.width + 'px'};
`
export const Title = styled.p<ColorsPorps>`
  color: ${(props) => props.colors?.title};
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: bold;
  grid-area: title;
  margin: 0px;
  padding: 0px;
  width: 100%;
`
export const XAxis = styled.div<ColorsSizePorps>`
  color: ${(props) => props.colors?.text};
  display: grid;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  grid-area: xaxis;
  grid-template-columns: repeat(
    7, ${(props) => ((props.size.width - 55) / 7) + 'px'}
  );
  height: 100%;
  padding-left: 15px;
  width: 100%;
`
export const Day = styled.p`
  font-family: 'Poppins', sans-serif;
  margin: 0px;
  overflow: hidden;
  padding: 0px;
  text-overflow: ellipsis;
  white-space: nowrap;
`
export const YAxis = styled.div<ColorsPorps>`
  color: ${(props) => props.colors?.text};
  border-right: 2px solid ${(props) => props.colors?.lines};
  display: grid;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  grid-template-rows: repeat(4, 1fr) 40px;
  grid-area: yaxis;
  height: 100%;
  justify-content: space-around;
  padding: 0px;
  width: 100%;
`
export const Hours = styled.p<ColorsPorps>`
  color: ${(props) => props.colors?.text};
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  height: 15px;
  margin: 0;
  overflow: hidden;
  padding: 0px;
  text-overflow: ellipsis;
  width: 100%;
  white-space: nowrap;
`
export const Shape = styled.div`
  display: grid;
  font-family: 'Poppins', sans-serif;
  grid-area: shape;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 100%;
`
export const Grid = styled.div<ColorsPorps>`
  border-top: 1px dashed ${(props) => props.colors?.lines};
  font-family: 'Poppins', sans-serif;
  height: 100%;
  width: 100%;
`
export const Bars = styled.div<BarsProps>`
  align-items: flex-end;
  display: grid;
  font-family: 'Poppins', sans-serif;
  grid-template-columns: repeat(7, 1fr);
  height: ${(props) => props.size.height - 70 + 'px'};
  position: absolute;
  width: ${(props) => props.size.width - 55 + 'px'};

  & .bar-day{
    background-color: ${(props) => props.color};
    background-image: ${(props) => props.color};
    border-radius: 55px 55px 0px 0px;
    height: 50px;
    margin-left: 15px;
    width: 15px;
  }

  & div{
    background-color: ${(props) => props.color};
    background-image: ${(props) => props.color};
    border-radius: 55px 55px 0px 0px;
    height: 50px;
    margin-left: 15px;
    width: 15px;
  }
`
