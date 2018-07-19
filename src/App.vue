<template>

  <div id="app" class="bg-light">

    <router-view/>

    <div class="container-fluid bg-dark text-light">
      <div class="row ifooter">
        <div class="col-md-4">
          <a href="https://iteam.ru/" target="_blank">
            <img src="./assets/logo.png" width="100">
          </a><br><br>
          <p>&copy;&nbsp;2002&nbsp;&mdash; 2017 iTeam<br>Москва, Пресненская наб.&nbsp;12</p>
        </div>
        <div class="col-md-8">
          <ul class="list-inline">
            <li class="list-inline-item">
              <a href="https://www.facebook.com/ITeam-Management-1538687959484919/">
                <img src="https://iteam.ru/landing/template/img/facebook.png">
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://vk.com/public150574411">
                <img src="https://iteam.ru/landing/template/img/vk.png">
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://www.instagram.com/iteam.ru/">
                <img src="https://iteam.ru/landing/template/img/instagram.png">
              </a>
            </li>
          </ul>
          <a href="https://iteam.ru/company/terms">Пользовательское соглашение</a>
          <br>
          <a href="https://iteam.ru/company/offer">Реквизиты</a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
.ifooter {
  padding: 20px;
  margin-top: 100px;
}
</style>
