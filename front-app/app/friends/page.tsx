import HeaderBar from "../components/HeaderBar";
import HomeBar from "../components/HomeBar";
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Stack } from "@mui/material";
import HighTouchButton from "../components/HighTouchButton";

interface User {
    user_id: number;
    name: string;
    image: string;
    description: string;
}


export default function Home() {

    //apiでデータを取得する

    // ダミーデータ
    const user_data: User[] = [
        { user_id: 1, name: "typescript", image: "https://thumb.ac-illust.com/0e/0ebed336b7870c9d83128eb9f311c14f_w.jpeg", description: "静的型付け言語" },
        { user_id: 2, name: "Next.js", image: "https://thumb.ac-illust.com/0e/0ebed336b7870c9d83128eb9f311c14f_w.jpeg", description: "フレームワーク" },
        { user_id: 3, name: "prisma", image: "https://thumb.ac-illust.com/0e/0ebed336b7870c9d83128eb9f311c14f_w.jpeg", description: "ORM" },
        { user_id: 4, name: "node.js", image: "https://thumb.ac-illust.com/0e/0ebed336b7870c9d83128eb9f311c14f_w.jpeg", description: "バックエンド" },
        { user_id: 1, name: "typescript", image: "https://thumb.ac-illust.com/0e/0ebed336b7870c9d83128eb9f311c14f_w.jpeg", description: "静的型付け言語" },
        { user_id: 2, name: "Next.js", image: "https://thumb.ac-illust.com/0e/0ebed336b7870c9d83128eb9f311c14f_w.jpeg", description: "フレームワーク" },
        { user_id: 3, name: "prisma", image: "https://thumb.ac-illust.com/0e/0ebed336b7870c9d83128eb9f311c14f_w.jpeg", description: "ORM" },
        { user_id: 4, name: "node.js", image: "https://thumb.ac-illust.com/0e/0ebed336b7870c9d83128eb9f311c14f_w.jpeg", description: "バックエンド" },
        { user_id: 1, name: "typescript", image: "https://thumb.ac-illust.com/0e/0ebed336b7870c9d83128eb9f311c14f_w.jpeg", description: "静的型付け言語" },
        { user_id: 2, name: "Next.js", image: "https://thumb.ac-illust.com/0e/0ebed336b7870c9d83128eb9f311c14f_w.jpeg", description: "フレームワーク" },
        { user_id: 3, name: "prisma", image: "https://thumb.ac-illust.com/0e/0ebed336b7870c9d83128eb9f311c14f_w.jpeg", description: "ORM" },
        { user_id: 4, name: "node.js", image: "https://thumb.ac-illust.com/0e/0ebed336b7870c9d83128eb9f311c14f_w.jpeg", description: "バックエンド" },
    ];

    return (
        <div>
            <HeaderBar />
            <Stack direction="column" marginTop={8} marginBottom={18} >
                <HighTouchButton></HighTouchButton>
                <Typography variant="h4" sx={{ paddingTop: 3, paddingBottom: 1 }} textAlign='center'>
                    フレンド一覧
                </Typography>

                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {user_data.map((user) => (
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt={user.name} src="../images/user1.png" />
                            </ListItemAvatar>
                            <ListItemText
                                primary={user.name}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            sx={{ color: 'text.primary', display: 'inline' }}
                                        >
                                            {user.description}
                                        </Typography>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </Stack>

            <HomeBar status="friends" />
        </div >
    );
}