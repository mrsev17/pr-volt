export const dataFiltrBy = (data, filter) => {
  if (filter === 'all') {
    return data
  }
  if (filter === 'completed') {
    return data.filter((todo) => todo.status)
  }
  if (filter === 'notCompleted') {
    return data.filter((todo) => !todo.status)
  }
  return data
}
