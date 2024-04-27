import {
  Rating,
  FormControl,
  InputLabel,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";

const TestimonialsFields = ({
  entity,
  setMessage,
  setAvatarId,
  setRating,
  setStatus,
  setName,
}) => {
  return (
    <div className="grid gap-4">
      <div className="grid gap-1.5">
        {entity != null ? (
          <TextField
            id="message-input"
            onChange={(e) => {
              setMessage(e.target.value);
              entity.message = e.target.value;
            }}
            value={entity.message}
            label="Message"
            variant="outlined"
          />
        ) : (
          <TextField
            id="message-input"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            label="Message"
            variant="outlined"
          />
        )}
      </div>
      <div className="grid gap-1.5">
        {entity != null ? (
          <TextField
            id="name-input"
            onChange={(e) => {
              setName(e.target.value);
              entity.name = e.target.value;
            }}
            value={entity.name}
            label="Name (Nick)"
            variant="outlined"
          />
        ) : (
          <TextField
            id="name-input"
            onChange={(e) => {
              setName(e.target.value);
            }}
            label="Name (Nick)"
            variant="outlined"
          />
        )}
      </div>
      {entity != null ? (
        <FormControl fullWidth>
          <InputLabel id="avatar-label">Avatar</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={entity.avatarId}
            label="Age"
            onChange={(e) => {
              setAvatarId(e.target.value);
              entity.avatarId = e.target.value;
            }}
          >
            <MenuItem value={1}>Ten</MenuItem>
            <MenuItem value={2}>Twenty</MenuItem>
            <MenuItem value={3}>Thirty</MenuItem>
          </Select>
        </FormControl>
      ) : (
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Avatar</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
            onChange={(e) => {
              setAvatarId(e.target.value);
            }}
          >
            <MenuItem value={1}>Ten</MenuItem>
            <MenuItem value={2}>Twenty</MenuItem>
            <MenuItem value={3}>Thirty</MenuItem>
          </Select>
        </FormControl>
      )}
      <div className="grid gap-1.5">
        {entity != null ? (
          <FormControl fullWidth>
            <InputLabel id="avatar-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={entity.status}
              label="Status"
              onChange={(e) => {
                setStatus(e.target.value);
                entity.status = e.target.value;
              }}
            >
              <MenuItem value={"PENDING"}>PENDING</MenuItem>
              <MenuItem value={"APPROVED"}>APPROVED</MenuItem>
              <MenuItem value={"REJECTED"}>REJECTED</MenuItem>
            </Select>
          </FormControl>
        ) : (
          <FormControl fullWidth>
            <InputLabel id="status-label">Status</InputLabel>
            <Select
              labelId="status-select-label"
              id="status"
              label="Status"
              onChange={(e) => {
                setAvatarId(e.target.value);
              }}
            >
              <MenuItem value={1}>PENDING</MenuItem>
              <MenuItem value={2}>APPROVED</MenuItem>
              <MenuItem value={3}>REJECTED</MenuItem>
            </Select>
          </FormControl>
        )}
      </div>
      <div className="grid gap-1.5">
        <label className="font-medium text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm">
          Rating
        </label>
        {entity != null ? (
          <Rating
            onChange={(event, newValue) => {
              setRating(newValue);
              entity.rating = newValue;
            }}
            value={entity.rating}
          />
        ) : (
          <Rating
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default TestimonialsFields;
