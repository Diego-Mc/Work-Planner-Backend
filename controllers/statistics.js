import Machine from '../models/Machine.js'
import Worker from '../models/Worker.js'
import Schedule from '../models/Schedule.js'

export const getStatistics = async (req, res) => {
  try {
    const { userId } = req

    // const machines = await Machine.find({ ownerId: userId })
    // const workers = await Worker.find({ ownerId: userId })
    const schedules = await Schedule.find({ ownerId: userId })
      .sort({
        'date.from': -1,
      })
      .exec()
    const lastInMachine = {}
    const timeShifts = {}

    schedules.forEach(({ table, date }) => {
      table.forEach((row) => {
        if (!lastInMachine[row.machine]) lastInMachine[row.machine] = {}
        row.data.morning.forEach((w) => {
          if (!w) return
          if (!lastInMachine[row.machine][w]) lastInMachine[row.machine][w] = []
          lastInMachine[row.machine][w].push(date.from)

          if (!timeShifts[w]) timeShifts[w] = {}
          if (!timeShifts[w].morning) timeShifts[w].morning = []
          timeShifts[w].morning.push(date.from)
        })
        row.data.evening.forEach((w) => {
          if (!w) return
          if (!lastInMachine[row.machine][w]) lastInMachine[row.machine][w] = []
          lastInMachine[row.machine][w].push(date.from)

          if (!timeShifts[w]) timeShifts[w] = {}
          if (!timeShifts[w].evening) timeShifts[w].evening = []
          timeShifts[w].evening.push(date.from)
        })
        row.data.night.forEach((w) => {
          if (!w) return
          if (!lastInMachine[row.machine][w]) lastInMachine[row.machine][w] = []
          lastInMachine[row.machine][w].push(date.from)

          if (!timeShifts[w]) timeShifts[w] = {}
          if (!timeShifts[w].night) timeShifts[w].night = []
          timeShifts[w].night.push(date.from)
        })
      })
    })

    res.status(201).json({ lastInMachine, timeShifts })
  } catch (err) {
    res.status(409).json({ error: err.message })
  }
}
