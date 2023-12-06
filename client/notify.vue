<template>
  <div>
    <h1>Hitokoto Sentences Library</h1>

    <k-comment>
      <p>
        Some translations are machine translated. You could improve them by sending PR to
      <a href="https://github.com/AwesomeHamster/koishi-plugin-hitokoto-sentences">this repo</a>.
    </p>
    </k-comment>

    <el-form>
      <el-form-item :label="languages[lang][1]">
        <el-select v-model="lang" placeholder="Select language">
          <el-option
            v-for="([label, _], value) in languages"
            :key="value"
            :label="label"
            :value="value"
          />
        </el-select>
      </el-form-item>
    </el-form>

    <div class="card">
      <k-markdown :source="notify[lang]" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useConfig } from '@koishijs/client'

const lang = ref('en-US')

onMounted(() => {
  const config = useConfig()
  lang.value = config.value.locale || 'en-US'
  if (lang.value in languages) return
  lang.value = 'en-US'
})

const languages: Record<string, [string, string]> = {
  'en-US': ['English (US)', 'Language'],
  'en-GB': ['English (UK)', 'Language'],
  'zh-CN': ['简体中文', '语言'],
  'zh-TW': ['繁體中文', '語言'],
  'yue-HK': ['粵語 (香港)', '語言'],
  'min-TW': ['閩南語 (臺灣)', '語言'],
  'fr-FR': ['Français', 'Langue'],
  'de-DE': ['Deutsch', 'Sprache'],
  'es-ES': ['Español', 'Idioma'],
  'pt-PT': ['Português', 'Idioma'],
  'ja-JP': ['日本語', '言語'],
  'kr-KR': ['한국어', '언어'],
  'ru-RU': ['Русский', 'Язык'],
}

const notify: Record<string, string> = {
  'en-US': `No configuration found here? That's normal.
This plugin is designed for the phrases library of the \`hitokoto\` plugin.
If you haven't installed the \`hitokoto\` plugin, please install it first and then refer to its configuration page.`,
  'en-GB': `No configuration found here? That's normal.
This plugin is designed for the phrases library of the \`hitokoto\` plugin.
If you haven't installed the \`hitokoto\` plugin, please install it first and then refer to its configuration page.`,
  'zh-CN': `找不到配置？这是正常的。此插件专为\`hitokoto\`插件的短语库设计。如果您尚未安装\`hitokoto\`插件，请先安装它，然后参考其配置页面。`,
  'zh-TW': `找不到配置？這是正常的。此插件專為\`hitokoto\`插件的短語庫設計。如果您尚未安裝\`hitokoto\`插件，請先安裝它，然後參考其配置頁面。`,
  'yue-HK': `冇揾到配置？係正常嘅。呢個插件係為\`hitokoto\`插件嘅短語庫而設計嘅。如果你仲未装\`hitokoto\`插件，請先裝返佢，再搵返佢嘅配置頁。`,
  'min-TW': `無揣著配置？是正常的。這款插件是為\`hitokoto\`插件的詞庫而設計的。若還未裝\`hitokoto\`插件，請先裝好伊，然後參考伊的配置頁。`,
  'fr-FR': `Aucune configuration trouvée ici ? C'est normal.
Ce plugin est conçu pour la bibliothèque de phrases du plugin \`hitokoto\`.
Si vous n'avez pas encore installé le plugin \`hitokoto\`, veuillez l'installer d'abord, puis vous référer à sa page de configuration.`,
  'de-DE': `Keine Konfiguration hier gefunden? Das ist normal.
Dieses Plugin ist für die Phrasenbibliothek des \`hitokoto\`-Plugins konzipiert.
Wenn Sie das \`hitokoto\`-Plugin noch nicht installiert haben, installieren Sie es bitte zuerst und sehen Sie dann auf seiner Konfigurationsseite nach.`,
  'es-ES': `¿No se encontró ninguna configuración aquí? Es normal.
Este complemento está diseñado para la biblioteca de frases del complemento \`hitokoto\`.
Si aún no ha instalado el complemento \`hitokoto\`, instálelo primero y luego consulte su página de configuración.`,
  'pt-PT': `Nenhuma configuração encontrada aqui? Isso é normal.
Este plugin é projetado para a biblioteca de frases do plugin \`hitokoto\`.
Se você ainda não instalou o plugin \`hitokoto\`, instale-o primeiro e consulte sua página de configuração.`,
  'ja-JP': `ここに設定が見つかりませんか？ それは普通です。
このプラグインは、\`hitokoto\`プラグインのフレーズライブラリのために設計されています。
まだ\`hitokoto\`プラグインをインストールしていない場合は、まずそれをインストールしてから、その構成ページを参照してください。`,
  'kr-KR': `여기에서 구성을 찾을 수 없나요? 정상입니다.
이 플러그인은 \`hitokoto\` 플러그인의 구문 라이브러리를 위해 설계되었습니다.
아직 \`hitokoto\` 플러그인을 설치하지 않았다면 먼저 설치한 다음 해당 구성 페이지를 참조하십시오.`,
  'ru-RU': `Конфигурация не найдена? Это нормально.
Этот плагин предназначен для библиотеки фраз плагина \`hitokoto\`.
Если вы еще не установили плагин \`hitokoto\`, пожалуйста, сначала установите его, а затем обратитесь к его странице конфигурации.`,
}
</script>

<style lang="scss" scoped>
.card {
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

@media (prefer-color-scheme: dark) {
  .card {
    background-color: #2c2c2c;
  }
}

html.dark .card {
  background-color: #2c2c2c;
}
</style>
