import JSBI from 'jsbi'

export interface TickData {
  tick: number
  liquidityNet: number
  liquidityGross: number
}

// Tick with fields parsed to JSBIs, and active liquidity computed.
export interface TickProcessed {
  tickIdx: number
  liquidityActive: JSBI
  liquidityGross: JSBI
  liquidityNet: JSBI
  price0: string
  price1: string
}
