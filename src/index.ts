import { resolve } from 'path'

import { Context, Schema, Service } from 'koishi'

import type {} from '@koishijs/console'

export const name = 'sentences'

declare module 'koishi' {
  interface Context {
    sentences: Sentences
  }
}

export const Config: Schema<any> = Schema.object({})

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

  getSentence(params?: SentencesParams) {
    const types = params?.c && params.c.length ? params.c : Object.keys(this.s)
    const type = types[Math.floor(Math.random() * types.length)]
    if (!(params?.min_length && params?.max_length)) {
      return this.s[type][Math.floor(Math.random() * this.s[type].length)]
    }

    const sentences = this.s[type].filter((s) => {
      if (params?.min_length && s.length < params.min_length) return false
      if (params?.max_length && s.length > params.max_length) return false
      return true
    })
    return sentences[Math.floor(Math.random() * sentences.length)]
  }
}

export function apply(ctx: Context) {
  ctx.plugin(Sentences)

  ctx.inject(['console'], (ctx) => {
    ctx.console.addEntry({
      dev: resolve(__dirname, '../client/index.ts'),
      prod: resolve(__dirname, '../dist'),
    })
  })
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

export interface SentencesParams {
  c?: string[]
  min_length?: number
  max_length?: number
}
