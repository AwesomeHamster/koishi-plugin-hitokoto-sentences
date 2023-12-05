import { Context, Logger, Schema } from 'koishi'

export const name = 'hitokoto-sentences'

const logger = new Logger('hitokoto-sentences')

export interface Config { }

export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context) {
  // write your plugin here
}
