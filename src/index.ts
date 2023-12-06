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

在这里没有找到配置项？这是正常的。这个插件是为 \`hitokoto\` 插件设计的语句库。如果你没有安装 \`hitokoto\` 插件，请先安装它，然后参考它的配置页面。

在這裡找不到設定項？這是正常的。這個外掛程式是為 \`hitokoto\` 外掛設計的語句庫。如果你沒有安裝 \`hitokoto\` 外掛，請先安裝它，然後參考它的設定頁面。

喺呢度搵唔到配置項？呢係正常嘅。呢個插件係為 \`hitokoto\` 插件設計嘅語句庫。如果你冇裝 \`hitokoto\` 插件，請先裝佢，然後睇佢嘅配置頁面。

No configuration found here? That's normal.
This plugin is designed for the statement library of the \`hitokoto\` plugin.
If you haven't installed the \`hitokoto\` plugin, please install it first and then refer to its configuration page.

Aucune configuration trouvée ici ? C'est normal.
Ce plugin est conçu pour la bibliothèque de déclarations du plugin \`hitokoto\`.
Si vous n'avez pas encore installé le plugin \`hitokoto\`, veuillez d'abord l'installer,
puis consultez sa page de configuration.

Keine Konfiguration hier gefunden? Das ist normal.
Dieses Plugin ist für die Aussagebibliothek des \`hitokoto\`-Plugins konzipiert.
Wenn Sie das \`hitokoto\`-Plugin noch nicht installiert haben,
installieren Sie es bitte zuerst und sehen Sie sich dann die Konfigurationsseite an.

¿No se encontró ninguna configuración aquí? Es normal.
Este complemento está diseñado para la biblioteca de declaraciones del complemento \`hitokoto\`.
Si aún no ha instalado el complemento \`hitokoto\`, instálelo primero y luego consulte su página de configuración.

Não encontrou a opção de configuração aqui? Isso é normal.
Este plugin foi projetado para a biblioteca de frases do plugin \`hitokoto\`.
Se você ainda não instalou o plugin \`hitokoto\`, por favor, instale-o primeiro e consulte a página de configuração.

ここで設定が見つかりませんか？それは正常です。このプラグインは、\`hitokoto\` プラグインのステートメントライブラリのために設計されています。
\`hitokoto\` プラグインをまだインストールしていない場合は、まずそれをインストールしてから、その構成ページを参照してください。

여기에서 구성 항목을 찾을 수 없나요? 정상입니다. 이 플러그인은 \`hitokoto\` 플러그인의 문장 라이브러리를 위해 설계되었습니다.
\`hitokoto\` 플러그인을 아직 설치하지 않았다면 먼저 설치하고 그 다음에 구성 페이지를 참조하십시오.

Не можете найти опцию конфигурации здесь? Это нормально.
Этот плагин предназначен для библиотеки фраз плагина \`hitokoto\`.
Если вы еще не установили плагин \`hitokoto\`, пожалуйста, сначала установите его,
а затем ознакомьтесь с его страницей конфигурации.
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
