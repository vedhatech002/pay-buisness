// src/components/home/TransactionsCard.jsx
import {
  Card,
  CardHeader,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";

export default function TransactionsCard({
  transactions = [
    { id: 1, name: "Ramesh Kumar", amount: "₹500", time: "10:30 AM" },
    { id: 2, name: "Sita Devi", amount: "₹250", time: "Yesterday" },
    { id: 3, name: "Anil Sharma", amount: "₹1200", time: "2 days ago" },
  ],
}) {
  return (
    <Card sx={{ borderRadius: 2, mb: 2 }}>
      <CardHeader
        title="Recent Transactions"
        titleTypographyProps={{ fontWeight: 600, fontSize: 16 }}
      />
      <Divider />
      <CardContent sx={{ p: 0 }}>
        <List>
          {transactions.map((txn, i) => (
            <ListItem
              key={txn.id}
              divider={i !== transactions.length - 1}
              sx={{ px: 2 }}
            >
              <ListItemText
                primary={<Typography fontWeight={500}>{txn.name}</Typography>}
                secondary={
                  <Typography variant="caption" color="text.secondary">
                    {txn.time}
                  </Typography>
                }
              />
              <Typography fontWeight={600}>{txn.amount}</Typography>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
