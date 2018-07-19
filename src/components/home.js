import Payment from '@/components/base/Payment.vue'
import Ytplayer from '@/components/base/Ytplayer.vue'
import Grform from '@/components/base/Grform.vue'
import moment from 'moment'

export default {
    name: 'Home',
    components: {
        Payment,
        Ytplayer,
        Grform
    },
    data() {
        return {
            paymentUrl: 'https://iteam.ru/learn/course/baza-znanij-russkij-menedzhment-2018'
        }
    },
    methods: {
        scrollMeTo(refName) {
            var element = this.$refs[refName];
            var top = element.offsetTop;
            window.scrollTo(0, top);
        },
        price(basePrice, step) {
            const now = moment()
            const startDate = moment("5-1-2018", "MM-DD-YYYY")
            const stopDate = moment("5-21-2018", "MM-DD-YYYY")

            let price = basePrice

            if (now.isBetween(startDate, stopDate)) {
                price = price + step * now.diff(startDate, 'days')
            }
            return price
        }
    },
    computed:{
        //
    },
    mounted() {
        //
    }
}