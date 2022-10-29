<template lang="">
    <div class="filter-date">
        <div class="label-periode">
        <img src="@/assets/images/calendar.png" alt="advotics">
            <span>Periode</span>
        </div>
        <Datepicker class="datepicker" @update:modelValue="handleDate" :maxDate="maxDate" v-model="date" :previewFormat="'dd MMMM yyyy'" :format="'dd MMMM yyyy'" :clearable="false" selectText="Apply" range multiCalendars :presetRanges="presetRanges" :enableTimePicker="false" />
        <img src="@/assets/images/ic-chevron-down-alt.svg" class="chevron-down" alt="advotics">
    </div>
</template>
<script>
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { ref, onMounted } from 'vue';
import * as moment from "moment";


export default {
    name: 'CustomDatepicker',
    components: {
        Datepicker
    },
    emits: ['onChangeDate'],
    setup(props, context) {
        const date = ref();
        const maxDate = ref();

        onMounted(() => {
            const startDate = moment().subtract(6, 'days');
            const endDate = moment();
            date.value = [startDate, endDate];

            const currentDate = moment().add(6, 'month');
            maxDate.value = currentDate.toDate();
        })

        const handleDate = (modelData) => {
            date.value = modelData;
            context.emit("onChangeDate", {
                startDate: moment(date.value[0]).format('YYYY-MM-DD'),
                endDate: moment(date.value[1]).format('YYYY-MM-DD'),
            });
        }

        const presetRanges = ref([
            {
                label: 'Today',
                range: [moment(), moment()]
            },
            {
                label: 'Yesterday',
                range: [moment().subtract(1, 'days'), moment().subtract(1, 'days')]
            },
            {
                label: 'Last 7 Days',
                range: [moment().subtract(6, 'days'), moment()],
            },
            {
                label: 'Last 30 Days',
                range: [moment().subtract(29, 'days'), moment()]
            },
            {
                label: 'This Month',
                range: [moment().startOf('month'), moment().endOf('month')]
            },
        ]);

        return {
            date,
            presetRanges,
            maxDate,
            handleDate
        }
    }
}
</script>
<style lang="scss">
$mobile: 900px;

.filter-date {
    height: 40px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 2px 3px #00000029;
    border-radius: 2px;
    padding: 0px 14px;
    font-size: .8rem;
    cursor: pointer;
    position: relative;
    display: flex;
    gap: 10px;
    align-items: center;

    .label-periode {
        display: flex;
        align-items: center;
        gap: 6px;

        img {
            width: 16px;
        }

        span {
            font-size: 14px;
            color: #8B8B8B;
        }

        @media only screen and (max-width: $mobile) {
            span {
                display: none;
            }
        }
    }

    .datepicker {
        min-width: 360px;

        .dp__input_readonly {
            outline: 0;
            border: 0;
            background: transparent;
            height: 100%;
            width: 100%;
            min-width: 300px;
            font-size: 16px;
            letter-spacing: 0px;
            color: #6A6A6A;
            pointer-events: none;
        }
    }

    .chevron-down {
        width: 20px;
        opacity: .5;
        transform: rotate(0deg);
        transition: all ease-in-out .3s;

        &.rotate {
            transform: rotate(180deg);
            transition: all ease-in-out .3s;
        }
    }
}

.dp__menu_content_wrapper {
    display: grid;
    grid-template-columns: 150px 1fr;

    .dp__preset_ranges {
        display: flex;
        flex-direction: column;

        .dp__preset_range {
            border-bottom: 1px solid #ccc;

            &:hover {
                background: #D6EDDA;
                background-color: #D6EDDA;
            }
        }
    }

}

.dp__range_end,
.dp__range_start,
.dp__active_date {
    background: #31A445;
}

.dp__range_between {
    background: #D6EDDA;
    color: #31A445;
}

@media only screen and (max-width: $mobile) {
    .dp__menu_content_wrapper {
        grid-template-columns: 1fr;
    }
    .dp__flex_display {
        flex-direction: column;
    }
}
</style>