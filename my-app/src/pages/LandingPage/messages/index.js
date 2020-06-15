import parseLanguages, { formatMessage } from 'rmw-shell/lib/utils/localeTools'
import messages_de from './de.json'
import messages_en from './en.json'
import messages_bs from './bs.json'
import messages_es from './es.json'
import messages_ru from './ru.json'
import messages_it from './it.json'
import messages_fr from './fr.json'

const messageSources = {
  de: messages_de,
  bs: messages_bs,
  es: messages_es,
  en: messages_en,
  ru: messages_ru,
  it: messages_it,
  fr: messages_fr,
}

const match = parseLanguages(['en', 'es', 'bs', 'ru', 'de', 'it', 'fr'], 'en')

const messages = messageSources[match]

export default function(uid) {
  return formatMessage(messages, uid)
}
