import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActions,
  IconButton,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteServices } from "../../Store/Masterslice";

const BookedServices = () => {
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(deleteServices(id));
  };

  const { cart } = useSelector((state) => state.master);

  return (
    <div style={{ minHeight: "100vh" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingTop: "20px",
        }}
        key="sample"
      >
        {cart.map((ele, id) => {
          console.log(id);
          return (
            <>
              <Card sx={{ maxWidth: 300 }} key={id} id={id}>
                <CardMedia
                  component="img"
                  height="200"
                  image="/images/support.png"
                  alt="service"
                />
                <CardContent>
                  <Typography variant="body2" color="text.primary">
                    Provider Name : {ele}
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    Servicing Providing : sample
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton>
                    <DeleteIcon onClick={() => removeFromCart(id)} />
                  </IconButton>
                </CardActions>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default BookedServices;
