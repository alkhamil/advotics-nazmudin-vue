<template>
    <div class="dashboard">
        <div class="title">
            <h4>Dashboard</h4>
            <CustomDatepicker class="datepicker" @onChangeDate="changeDate" />
        </div>

        <div class="insight">
            <div class="header">
                <h5>MARKET INSIGHTS</h5>
                <div class="actions">
                    <div class="tooltip">
                        <img src="@/assets/images/help.png" alt="advotics">
                        <span>Click Here for Help</span>
                    </div>
                    <img src="@/assets/images/ic-chevron-down.svg" class="chevron-down" alt="advotics">
                </div>
            </div>


            <div class="content">
                <div class="insight-counting">
                    <template v-for="(item, i) in insightCountingData" v-bind:key="i">
                        <div class="card">
                            <div class="card-header">
                                <span>{{ item.name }}</span>
                                <img src="@/assets/images/ic-more.svg" class="ic-more" alt="advotics">
                            </div>

                            <div class="card-body">
                                <div class="counting-info">
                                    <span class="amount">{{ $filters.toCurrency(item.amount) }}</span>
                                    <div class="other">
                                        <span class="percentage">
                                            <img v-bind:src="item.percentageIcon" alt="advotics">
                                            <span>{{ item.percentage }}</span>
                                        </span>
                                        <span class="description">{{ item.description }}</span>
                                    </div>
                                </div>
                                <div class="counting-icon">
                                    <img v-bind:src="item.icon" alt="advotics">
                                </div>
                            </div>
                        </div>
                    </template>
                </div>

                <div class="insight-visual">
                    <div class="card">
                        <div class="card-header">
                            <span>AVERAGE PURCHASE VALUE</span>

                            <div class="actions">
                                <select>
                                    <option value="0">Last 6 Month</option>
                                </select>
                                <img src="@/assets/images/ic-more.svg" class="ic-more" alt="advotics">
                            </div>
                        </div>

                        <div class="card-body">
                            <ScatterChart :chartData="chart" />

                            <div class="legends">
                                <template v-for="(item, i) in barChartLegends" v-bind:key="i">
                                    <div class="legend-item">
                                        <div class="box-color" :style="{ backgroundColor: item.color }"></div>
                                        <span>{{ item.label }}</span>
                                    </div>
                                </template>

                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <span>BEST SELLING SKU</span>
                            <img src="@/assets/images/ic-more.svg" class="ic-more" alt="advotics">
                        </div>

                        <div class="card-body">
                            <div class="products">
                                <template v-for="(item, index) in products" :key="index">
                                    <div class="product-item" :class="{ active: index == 0 }">
                                        <img v-bind:src="item.image" alt="advotics">
                                        <div class="product-info">
                                            <span class="name">{{ item.name }}</span>
                                            <div class="product-sell">
                                                <span class="price">{{ $filters.toCurrency(item.price) }}</span>
                                                <span class="sold">{{ item.sold }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <span>TOP COMPETITOR SKU</span>
                            <img src="@/assets/images/ic-more.svg" class="ic-more" alt="advotics">
                        </div>

                        <div class="card-body">
                            <div class="products">
                                <template v-for="(item, index) of products" :key="index">
                                    <div class="product-item" :class="{ active: index == 0 }">
                                        <img v-bind:src="item.image" alt="advotics">
                                        <div class="product-info">
                                            <span class="name">{{ item.name }}</span>
                                            <div class="product-sell">
                                                <span class="price">{{ $filters.toCurrency(item.price) }}</span>
                                                <span class="sold">{{ item.sold }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import CustomDatepicker from '../shared/CustomDatepicker.vue';
import { ScatterChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default {
    name: 'DashboardComponent',
    components: {
        CustomDatepicker,
        ScatterChart
    },
    data() {
        return {
            chart: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [
                    {
                        label: 'Line',
                        type: 'line',
                        data: [25, 20, 21, 14, 25, 4, 15],
                        borderColor: '#FFE854',
                        backgroundColor: ['#FFE854', '#FFE854', '#FFE854', '#FFE854', '#FFE854'],
                    },
                    {
                        label: 'Bar',
                        type: 'bar',
                        data: [22, 20, 21, 14, 20, 5, 15],
                        backgroundColor: ['#37B04C', '#37B04C', '#37B04C', '#37B04C', '#37B04C'],
                    },
                ],
            },
            insightCountingData: [
                {
                    name: 'Sales Turnover',
                    amount: 3600000,
                    percentage: 13.8,
                    percentageIcon: require('../../assets/images/ic-down.svg'),
                    description: 'last periode in product sold',
                    icon: require('../../assets/images/sales-turnover.png')
                },
            ],
            barChartLegends: [
                {
                    color: '#37B04C',
                    label: 'Nett'
                },
                {
                    color: '#289E45',
                    label: 'Gross'
                },
                {
                    color: '#7AE28C',
                    label: 'Average Purchase Value'
                },
                {
                    color: '#707070',
                    label: 'Unit per Transaction'
                }
            ],
            products: [
                {
                    name: 'Activia',
                    image: require('../../assets/images/product.png'),
                    price: 12000,
                    sold: 56
                },
                {
                    name: 'Nature',
                    image: require('../../assets/images/product.png'),
                    price: 10000,
                    sold: 30
                },
                {
                    name: 'Nature',
                    image: require('../../assets/images/product.png'),
                    price: 10000,
                    sold: 30
                },
                {
                    name: 'Nature',
                    image: require('../../assets/images/product.png'),
                    price: 10000,
                    sold: 30
                },
                {
                    name: 'Nature',
                    image: require('../../assets/images/product.png'),
                    price: 10000,
                    sold: 30
                },
            ]
        }
    },
    methods: {
        changeDate(value) {
            if (!value) {
                return;
            }
            const valuesBar = [];
            const valuesLine = [];
            for (let i = 0; i < 7; i++) {
                valuesBar.push(Math.floor(Math.random() * 25));
                valuesLine.push(Math.floor(Math.random() * 25));
            }
            this.chart.datasets.at(0).data = valuesLine;
            this.chart.datasets.at(1).data = valuesBar;
        }
    }
}
</script>
<style lang="scss">
$mobile: 900px;

.dashboard {
    display: flex;
    flex-direction: column;

    .title {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h4 {
            font-size: 30px;
            font-weight: 600;
            color: #707070C4;
        }

        @media only screen and (max-width: $mobile) {
            .datepicker {
                width: 100%;
            }
        }
    }

    @media only screen and (max-width: $mobile) {
        .title {
            flex-direction: column;

            .datepicker {
                width: 100%;
            }
        }
    }

    .insight {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 14px;

        .header {
            padding: 10px 14px;
            background-color: #37B04C;
            display: flex;
            align-items: center;
            justify-content: space-between;

            h5 {
                font-size: 14px;
                font-weight: 600;
                color: #fff;
            }

            .actions {
                display: flex;
                align-items: center;
                gap: 6px;

                .tooltip {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    cursor: pointer;

                    img {
                        width: 16px;
                    }

                    span {
                        text-decoration: underline;
                        font-size: 12px;
                        color: #fff;
                        letter-spacing: 0px;
                    }
                }

                .chevron-down {
                    cursor: pointer;
                    transform: rotate(180deg);
                }
            }
        }

        .content {
            display: flex;
            flex-direction: column;
            gap: 14px;

            .insight-counting {
                display: grid;
                gap: 10px;
                grid-template-columns: repeat(4, minmax(100px, 1fr));

                .card {
                    background-color: #fff;
                    box-shadow: 0px 2px 3px #00000029;

                    padding: 10px;
                    border-radius: 4px;

                    .card-header {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;

                        span {
                            font-size: 12px;
                            color: #4D4F5C;
                        }

                        .ic-more {
                            cursor: pointer;
                            width: 10px;
                        }
                    }

                    .card-body {
                        display: flex;
                        align-items: center;
                        gap: 16px;

                        .counting-info {
                            display: flex;
                            flex-direction: column;
                            gap: 6px;

                            .amount {
                                font-size: 18px;
                                font-weight: 700;
                                color: #4D4F5C;
                            }

                            .other {
                                display: flex;
                                gap: 4px;

                                .percentage {
                                    display: flex;
                                    align-items: center;
                                    gap: 4px;

                                    img {
                                        width: 10px;
                                    }

                                    span {
                                        font-size: 10px;
                                        font-weight: 600;
                                        color: #FF4141;
                                    }
                                }

                                .description {
                                    font-size: 10px;
                                    font-weight: 400;
                                    color: #707070;
                                }
                            }
                        }

                        .counting-icon {
                            img {
                                width: 40px;
                            }
                        }
                    }
                }
            }

            @media only screen and (max-width: $mobile) {
                .insight-counting {
                    grid-template-columns: repeat(1, minmax(100px, 1fr));
                }
            }

            .insight-visual {
                display: grid;
                gap: 10px;
                grid-template-columns: 600px 1fr 1fr;

                .card {
                    background-color: #fff;
                    box-shadow: 0px 2px 3px #00000029;

                    padding: 10px;
                    border-radius: 4px;

                    .card-header {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;

                        span {
                            font-size: 16px;
                            color: #4D4F5C;
                        }

                        .actions {
                            display: flex;
                            gap: 10px;
                            align-items: center;

                            select {
                                cursor: pointer;
                                border: 1px solid #ccc;
                                border-radius: 2px;
                                height: 28px;
                            }
                        }

                        .ic-more {
                            cursor: pointer;
                            width: 10px;
                        }
                    }

                    .card-body {
                        margin-top: 20px;

                        .legends {
                            display: flex;
                            align-items: center;
                            gap: 10px;
                            padding: 0 14px;

                            .legend-item {
                                display: flex;
                                align-items: center;
                                gap: 4px;

                                .box-color {
                                    width: 20px;
                                    height: 10px;
                                    border-radius: 80px;
                                }

                                span {
                                    font-size: 12px;
                                    color: #4D4F5C;
                                }
                            }
                        }

                        .products {
                            display: flex;
                            gap: 4px;
                            flex-direction: column;

                            .product-item {
                                display: flex;
                                align-items: center;
                                gap: 10px;
                                border: 0.5px solid #C5C5C59C;
                                border-radius: 4px;

                                img {
                                    width: 60px;
                                }

                                .product-info {
                                    width: 100%;

                                    .name {
                                        font-size: 14px;
                                        color: #000000DE;
                                        font-weight: 500;
                                    }

                                    .product-sell {
                                        width: 100%;
                                        display: block;
                                        display: flex;
                                        align-items: center;
                                        justify-content: space-between;
                                        padding-right: 20px;
                                        font-size: 12px;
                                        color: #00000099;
                                    }
                                }

                                &.active {
                                    background: #FFE7BD;
                                    border: none;

                                    img {
                                        width: 100px;
                                    }

                                    .product-info .name {
                                        font-size: 16px;
                                    }

                                    .product-info .product-sell {
                                        font-size: 14px;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            @media only screen and (max-width: $mobile) {
                .insight-visual {
                    grid-template-columns: repeat(1, minmax(100px, 1fr));
                }
            }
        }

    }
}
</style>