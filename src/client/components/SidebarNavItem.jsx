import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

const SidebarNavItem = ({
  icon,
  label,
  active = false,
  collapsed = false,
  onClick,
}) => {
  return (
    <ListItemButton
      onClick={onClick}
      selected={active}
      sx={{
        minHeight: 44,
        borderRadius: 2,
        px: collapsed ? 1 : 1.5,
        justifyContent: collapsed ? 'center' : 'flex-start',
        color: active ? '#1f3326' : '#617064',
        '&.Mui-selected': {
          bgcolor: '#e7f3e9',
          color: '#1f3326',
          '&:hover': {
            bgcolor: '#dceedd',
          },
        },
        '&:hover': {
          bgcolor: '#f1f6ef',
        },
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: collapsed ? 0 : 36,
          color: 'inherit',
          justifyContent: 'center',
        }}
      >
        {icon}
      </ListItemIcon>

      {!collapsed ? (
        <ListItemText
          primary={label}
          primaryTypographyProps={{
            fontSize: 14,
            fontWeight: active ? 700 : 600,
          }}
        />
      ) : null}
    </ListItemButton>
  );
};

export default SidebarNavItem;