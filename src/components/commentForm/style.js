const button = {
  borderColor: 'transparent',
  borderRadius: '5px',
  color: 'white',
  fontSize: '20px',
  marginTop: '15px',
  padding: '20px',
}

const field = {
  borderColor: 'transparent',
  marginLeft: '30px',
  padding: '20px',
  textAlign: 'right',
  width: '280px',
}

export default {
  container: {
    backgroundColor: '#F8F8F8',
    border: '1px solid #f2f2f2',
    borderRadius: '5px',
    color: '#505050',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '26px',
    height: '460px',
    justifyContent: 'space-between',
    padding: '20px',
    textAlign: 'left',
    width: '360px',
  },

  disabledButton: {
    ...button,
    backgroundColor: 'silver',
  },

  error: {
    color: 'red',
    fontSize: '15px',
    marginTop: '10px',
  },

  fieldWrapper: {
    alignItems: 'center',
    backgroundColor: 'white',
    border: '1px solid #F8F8F8',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '5px',
    padding: '10px',
  },

  input: {
    ...field,
    fontSize: '20px',
    height: 'auto',
  },

  label: {
    width: '340px',
  },

  textarea: {
    ...field,
    borderRadius: '5px',
    fontSize: '20px',
    height: '60px',
    resize: 'none',
  },

  validButton: {
    ...button,
    backgroundColor: '#660099',
  },
}
