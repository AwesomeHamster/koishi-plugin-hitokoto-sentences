import { Context, Schema, Service } from 'koishi'

export const name = 'sentences'

declare module 'koishi' {
  interface Context {
    sentences: Sentences
  }
}

export const usage = `
> Some translations are machine translated. You could improve them by sending PR to
> [this repo](https://github.com/AwesomeHamster/koishi-plugin-hitokoto-sentences).

No configuration found here? That's normal.
This plugin is designed for the phrases library of the \`hitokoto\` plugin.
If you haven't installed the \`hitokoto\` plugin, please install it first and then refer to its configuration page.

找不到配置？这是正常的。此插件专为\`hitokoto\`插件的短语库设计。如果您尚未安装\`hitokoto\`插件，请先安装它，然后参考其配置页面。

找不到配置？這是正常的。此插件專為\`hitokoto\`插件的短語庫設計。如果您尚未安裝\`hitokoto\`插件，請先安裝它，然後參考其配置頁面。

冇揾到配置？係正常嘅。呢個插件係為\`hitokoto\`插件嘅短語庫而設計嘅。如果你未裝咗\`hitokoto\`插件，請先裝返佢，再搵返佢嘅配置頁。

無揣著配置？是正常的。這款插件是為\`hitokoto\`插件的詞庫而設計的。若還未裝\`hitokoto\`插件，請先裝好伊，然後參考伊的配置頁。

Aucune configuration trouvée ici ? C'est normal.
Ce plugin est conçu pour la bibliothèque de phrases du plugin \`hitokoto\`.
Si vous n'avez pas encore installé le plugin \`hitokoto\`, veuillez l'installer d'abord, puis vous référer à sa page de configuration.

Keine Konfiguration hier gefunden? Das ist normal.
Dieses Plugin ist für die Phrasenbibliothek des \`hitokoto\`-Plugins konzipiert.
Wenn Sie das \`hitokoto\`-Plugin noch nicht installiert haben, installieren Sie es bitte zuerst und sehen Sie dann auf seiner Konfigurationsseite nach.

¿No se encontró ninguna configuración aquí? Es normal.
Este complemento está diseñado para la biblioteca de frases del complemento \`hitokoto\`.
Si aún no ha instalado el complemento \`hitokoto\`, instálelo primero y luego consulte su página de configuración.

Nenhuma configuração encontrada aqui? Isso é normal.
Este plugin é projetado para a biblioteca de frases do plugin \`hitokoto\`.
Se você ainda não instalou o plugin \`hitokoto\`, instale-o primeiro e consulte sua página de configuração.

ここに設定が見つかりませんか？ それは普通です。
このプラグインは、\`hitokoto\`プラグインのフレーズライブラリのために設計されています。
まだ\`hitokoto\`プラグインをインストールしていない場合は、まずそれをインストールしてから、その構成ページを参照してください。

여기에서 구성을 찾을 수 없나요? 정상입니다.
이 플러그인은 \`hitokoto\` 플러그인의 구문 라이브러리를 위해 설계되었습니다.
아직 \`hitokoto\` 플러그인을 설치하지 않았다면 먼저 설치한 다음 해당 구성 페이지를 참조하십시오.

Конфигурация не найдена? Это нормально.
Этот плагин предназначен для библиотеки фраз плагина \`hitokoto\`.
Если вы еще не установили плагин \`hitokoto\`, пожалуйста, сначала установите его, а затем обратитесь к его странице конфигурации.
`

export interface Config {}

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
