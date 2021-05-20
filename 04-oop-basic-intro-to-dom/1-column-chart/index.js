function columnTemplate(data){
  if(data && data.length)
      return data.map(val => `<div style="--value: ${val.value}" data-tooltip="${val.percent}"></div>`).join('\n');
  return '';
}

export default class ColumnChart {
  constructor({data = [], label = '', link = '', value = 0, chartHeight = 50,
                formatHeading } = {}) {
    this.data = data;
    this.label = label;
    this.link = link;
    this.value = value;
    this.chartHeight = chartHeight;
    if(formatHeading) {
      this.value = formatHeading(this.value);
    }
    this.data = this.scaleData();
    this.render();
  }

  render() {
    const element = document.createElement('div');

    element.innerHTML = `
    <div class="column-chart" style="--chart-height: 50">
      <div class="column-chart__title">
        ${this.label}
        <a href="${this.link}" class="column-chart__link">View all</a>
      </div>
      <div class="column-chart__container">
        <div data-element="header" class="column-chart__header">${this.value}</div>
        <div data-element="body" class="column-chart__chart">
            ${columnTemplate(this.data)}
        </div>
      </div>
    </div>
    `;

    this.element = element.firstElementChild;

    if(!this.data || !this.data.length){
      this.element.classList.add('column-chart_loading');
    }
      }

  update (data) {
    this.data = data;
    this.remove();
    this.render();
  }

  remove () {
    this.element.remove();
  }

  destroy() {
    this.remove();
  }

  scaleData() {
    const maxValue = Math.max(...this.data);
    const scale = 50 / maxValue;

    return this.data.map(item => {
      return {
        percent: (item / maxValue * 100).toFixed(0) + '%',
        value: String(Math.floor(item * scale))
      };
    });
  }

}
