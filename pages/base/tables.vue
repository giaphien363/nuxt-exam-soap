<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col lg="6">
        <c-table caption="<i class='fa fa-align-justify'></i> Simple Table">
        </c-table>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import cTable from "./table.vue";

export default {
  name: "tables",
  components: { cTable },
};
</script>
