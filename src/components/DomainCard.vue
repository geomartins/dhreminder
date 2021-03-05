<template>

        <div>

             <div class="dept_card">
                <div class="dept_card__box" v-for="(dept,index) in $store.state.item.datas" :key="dept+index" >
                    <div class="dept_card__box__icon">
                        <q-icon name="fas fa-globe" class="text-primary" style="font-size: 1.5rem"  />
                    </div>
                    <div class="dept_card__box__title">
                    {{ dept.name }}
                    </div>
                </div>
            </div>
        </div>

</template>

<script>
export default {
  name: 'DomainCard',
  props: ['depts']
}
</script>

<style>

.dept_card{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* margin-top: 3rem; */
    margin-left: 2rem;
    margin-right: 2rem;
    cursor: pointer;
}

.dept_card .dept_card__box{
    display: flex;
    flex-direction: row;
    width: 20%;
    height: 8vh;
    margin: 1rem 0.5rem;
}

.dept_card .dept_card__box .dept_card__box__icon{
    text-align: center;
    vertical-align: middle;
    width: 20%;
    height: 100%;
    background: whitesmoke;
    display: flex;
    align-items: center;
    justify-content: center;
}

.dept_card .dept_card__box .dept_card__box__title{
    width: 78%;
    height: 100%;
    border: 1px solid #e6dddd;
    display: flex;
    align-items: center;
    justify-content: center;
}

@media (min-width: 0px) and (max-width: 500px){
    .dept_card{
        display: flex;
        flex-direction: column;
        margin-top: 1rem;
        margin-left: .5rem;
        align-items: center;
    }

    .dept_card .dept_card__box {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 10vh;
        margin: 0.5rem;
    }

}

@media (min-width: 501px) and (max-width: 1000px){
    .dept_card{
        display: flex;
        flex-direction: row;
        margin-top: 1rem;
        margin-left: .2rem;
        margin-right: .2rem;
        align-items: center;
    }

    .dept_card .dept_card__box {
        display: flex;
        flex-direction: row;
        width: 30%;
        height: 3rem;
        margin: 0.5rem;
    }

}

@media (min-width: 1001px) and (max-width: 1500px){
    .dept_card{
        display: flex;
        flex-direction: row;
        margin-top: 1rem;
        margin-left: 1rem;
        margin-right: 1rem;
        align-items: center;

    }

    .dept_card .dept_card__box {
        display: flex;
        flex-direction: row;
        width: 30%;
        height: 10vh;
        margin: 0.5rem;
    }

}
</style>
