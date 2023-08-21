<template>
    <v-card flat>
      <v-layout>
        <v-navigation-drawer
          expand-on-hover
          rail
        >
          <v-list>
            <v-list-item
              :prepend-avatar="avatar"
              title="Forest Fans Base"
              subtitle="admin"
            ></v-list-item>
          </v-list>
  
          <v-divider></v-divider>
  
          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-chart-bar" title="Dashboard" value="dashboard" to="/admin/dashboard"></v-list-item>
            <v-list-item prepend-icon="mdi-cash" title="Balance" value="balance" to="/admin/balance"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group" title="Fans List" value="fans-list" to="/admin/fans-list"></v-list-item>
            <v-list-item prepend-icon="mdi-gift" title="Fans Interactions" value="fans-interactions" to="/admin/fans-interactions"></v-list-item>            
            <v-list-item prepend-icon="mdi-panorama-variant" title="Forest Gallery" value="forest-gallery" to="/admin/forest-gallery"></v-list-item>            
            <v-list-item prepend-icon="mdi-cog" title="Setting" value="setting" to="/admin/setting"></v-list-item>
          </v-list>
        </v-navigation-drawer>
  
        <v-main>
          <div class="tw-p-4">
            <RouterView/>
          </div>
        </v-main>
      </v-layout>
    </v-card>
</template>

<script lang="ts" setup>
import avatar from '@/assets/me.png'


</script>