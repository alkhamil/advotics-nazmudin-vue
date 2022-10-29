<template>
    <div class="header">
        <div class="logo">
            <img src="@/assets/images/logo.jpg" alt="advotics" class="brand">
            <div class="poweredby">
                <span>powered by</span>
                <img src="@/assets/images/logo.jpg" alt="advotics">
            </div>
        </div>

        <div class="toolbar">
            <div class="userdata">
                <span class="username">Username</span>
                <span class="companyname">Company Name</span>
            </div>
            <div class="profile">
                <img src="@/assets/images/ic-profile.svg" alt="advotics">
            </div>
            <div class="logout">
                <img src="@/assets/images/logout.png" alt="advotics">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'HeaderComponent'
}
</script>
<style lang="scss">
$mobile: 900px;

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 34px;
    height: 100%;

    .logo {
        display: flex;
        gap: 6px;

        .brand {
            width: 140px
        }

        .poweredby {
            display: flex;
            align-self: flex-end;
            gap: 4px;

            span {
                font-size: 12px;
                font-weight: 300;
            }

            img {
                width: 60px;
            }
        }

        @media only screen and (max-width: $mobile) {
            .poweredby {
                display: none;
            }
        }
    }

    .toolbar {
        display: flex;
        align-items: center;
        gap: 16px;

        .userdata {
            display: flex;
            flex-direction: column;
            align-items: center;

            .username {
                font-size: 14px;
                font-weight: 500;
            }

            .companyname {
                font-size: 12px;
                font-weight: 300;
            }
        }

        @media only screen and (max-width: $mobile) {
            .userdata {
                display: none;
            }
        }

        .profile {
            cursor: pointer;

            img {
                width: 32px;
            }
        }

        .logout {
            cursor: pointer;

            img {
                width: 16px;
            }
        }
    }
}

@media only screen and (max-width: $mobile) {
    .header {
        padding: 0px 14px;
    }
}
</style>