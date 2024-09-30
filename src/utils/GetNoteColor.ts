const getNoteColor = (deadline: string) => {
  const deadlineDate = new Date(deadline);
  const currentDate = new Date();
  const timeDiff = deadlineDate.getTime() - currentDate.getTime();
  const dayDiff = timeDiff / (1000 * 60 * 60 * 24);

  if (dayDiff < 0) {
    return 'black';  // Expired
  } else if (dayDiff <= 1) {
    return 'red';    // Last 3 days
  } else if (dayDiff <= 3) {
    return 'orange'; // Close to deadline
  } else if (dayDiff <= 7) {
    return 'yellow'; // Approaching
  } else {
    return 'green';  // Safe zone
  }
};

export default getNoteColor;