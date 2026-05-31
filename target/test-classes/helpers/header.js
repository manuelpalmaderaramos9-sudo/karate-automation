function fn(token) {

  return {
    Authorization: 'Bearer ' + token,
    'Content-Type': 'application/json'
  };

}