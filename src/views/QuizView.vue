<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonRouterOutlet } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import router from '@/router';
</script>

<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Menu</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent :fullscreen="true">
      <IonList>
        <IonItem>
          <IonLabel>問題一覧</IonLabel>
        </IonItem>
        <IonItem @click="router.push('/problem')">
          <IonLabel>ランダム出題</IonLabel>
        </IonItem>
      </IonList>
    </IonContent>
  </IonPage>
</template>
