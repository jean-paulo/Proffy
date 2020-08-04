export default function convertHourToMinutes(time: string) {
    //8:00 separa nos dois pontos e converte cada um deles para o tipo numérico
    const [hour, minutes] = time.split(':').map(Number);

    const timeInMinutes = (hour * 60) + minutes;

    return timeInMinutes;
}