import { Context, Schema, Service } from 'koishi'

export const name = 'sentences'

declare module 'koishi' {
  interface Context {
    'sentences': Sentences
  }
}

export interface Config { }

export const Config: Schema<Config> = Schema.object({})

export class Sentences extends Service {
  private s: {
    [key: string]: Sentence[]
  } = {}

  constructor(ctx: Context) {
    super(ctx, 'sentences', true)
    this.s = {
      a: require('../data/a.json'),
      b: require('../data/b.json'),
      c: require('../data/c.json'),
      d: require('../data/d.json'),
      e: require('../data/e.json'),
      f: require('../data/f.json'),
      g: require('../data/g.json'),
      h: require('../data/h.json'),
      i: require('../data/i.json'),
      j: require('../data/j.json'),
      k: require('../data/k.json'),
      l: require('../data/l.json'),
    }
  }

  getAllByType(type: string): Sentence[] {
    return this.s[type]
  }

  getRandomOneByType(type: string): Sentence {
    return this.s[type][Math.floor(Math.random() * this.s[type].length)]
  }
}

export function apply(ctx: Context) {
  ctx.plugin(Sentences)
}

export interface Sentence {
  id: number
  hitokoto: string
  type: string
  from: string
  from_who: string | null
  creator: string
  creator_uid: number
  reviewer: number
  uuid: string
  commit_from: string
  created_at: string
  length: number
}
