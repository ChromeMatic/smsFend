<script >
import {Line} from "vue-chartjs";
export default{
  name: "LineChart",
  extends:Line,
  props:["chartData","options"],
  mounted() {
    this.renderChart(this.chartData,this.options)
  }
}
</script>

