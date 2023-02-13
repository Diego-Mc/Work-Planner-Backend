import Machine from '../models/Machine.js'

/* CREATE */
export const createMachine = async (req, res) => {
  try {
    const { ownerId, name, amountOfWorkers } = req.body
    const newMachine = new Machine({
      ownerId,
      name,
      amountOfWorkers,
    })
    const savedMachine = await newMachine.save()

    res.status(201).json(savedMachine)
  } catch (err) {
    res.status(409).json({ error: err.message })
  }
}

/* READ */
export const getMachines = async (req, res) => {
  try {
    const { userId } = req
    const machines = await Machine.find({ ownerId: userId })
    res.status(200).json(machines)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}

export const getMachine = async (req, res) => {
  try {
    const { machineId } = req.params
    const machine = await Machine.findById(machineId)
    res.status(200).json(machine)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}

/* UPDATE */
export const saveMachine = async (req, res) => {
  try {
    const { machineId } = req.params
    const { ownerId, name, amountOfWorkers } = req.body
    const updatedMachine = await Machine.findByIdAndUpdate(
      machineId,
      {
        ownerId,
        name,
        amountOfWorkers,
      },
      { new: true }
    )

    res.status(200).json(updatedMachine)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}

export const deleteMachine = async (req, res) => {
  try {
    const { machineId } = req.params
    const { userId } = req

    let removedMachine = await Machine.findById(machineId)

    if (removedMachine.ownerId !== userId) throw new Error('Not authorized')

    removedMachine = await Machine.deleteOne({ _id: machineId })
    res.status(200).json(removedMachine)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}
