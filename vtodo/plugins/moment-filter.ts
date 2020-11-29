import Vue from 'vue'
import moment from 'moment'

Vue.filter('moment', function (value: any, format: string) {
  const date = moment(value)
  const f: string = format == null ? 'YYYY/MM/DD HH:mm' : format
  console.log(date + f)

  return date.format(f)
})
