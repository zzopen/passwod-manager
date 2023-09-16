import ProgressBar from 'electron-progressbar'

export const openExportProgressBar = async () => {
  const progressBar = new ProgressBar({
    indeterminate: false,
    closeOnComplete: true,
    text: 'Preparing data...',
    detail: 'Wait...',
    browserWindow: {
      closable: true
    }
  })

  progressBar
    .on('completed', function () {
      console.info(`completed...`)
      progressBar.detail = 'Task completed. Exiting...'
    })
    .on('aborted', function (value) {
      console.info(`aborted... ${value}`)
    })
    .on('progress', function (value) {
      progressBar.detail = `Value ${value} out of ${progressBar.getOptions().maxValue}...`
    })

  // launch a task and increase the value of the progress bar for each step completed of a big task;
  // the progress bar is set to completed when it reaches its maxValue (default maxValue: 100);
  // ps: setInterval is used here just to simulate the progress of a task
  setInterval(function () {
    if (!progressBar.isCompleted()) {
      progressBar.value += 1
    }

    progressBar
  }, 20)
}
