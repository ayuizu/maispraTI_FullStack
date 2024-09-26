package encapsulationII;

//Tudo isso é criado no Record

public class ExtensivePoint {

    private int x;
    private int y;

    public ExtensivePoint(int x, int y) {
        this.x = x;
        this.y = y;
    }
    public int getX() {
        return this.x;
    }
    public int getY() {
        return this.y;
    }
    public void setX(int x) {
        this.x = x;
    }
    public void setY(int y) {
        this.y = y;
    }

    @Override
    public String toString() {
        return "ExtensivePoint{" + "x=" + x + ", y=" + y + '}';
    }

    @Override
    public boolean equals(Object obj) {
        if(this == obj) return true;
        if(obj == null || getClass() != obj.getClass()) return false;
        ExtensivePoint point = (ExtensivePoint) obj;
        return Double.compare(x,point.x) == 0 && Double.compare(y, point.y) ==0;

    }

    @Override
    public int hashCode() {
        return super.hashCode();
    }

}
